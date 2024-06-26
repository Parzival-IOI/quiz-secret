"use client";
import { quizzesResponse, tableResponse } from "@/utils/definition";
import { fetchInfiniteScroll } from "@/utils/main/infiniteScroll";
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query"
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import Search from "../Table/Search";
import { useInView } from "react-intersection-observer";
import CardInfinite from "./CardInfinite";
import CardTemplate from "./CardTemplate";

const queryClient = new QueryClient();
const InfiniteScroll = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Scroll/>
    </QueryClientProvider>
  )
}

export default InfiniteScroll

const Scroll = () => {

  const [quiz, setQuiz] = useState<quizzesResponse>([]);
  const [page, setPage] = useState<number>(0);
  const [isMore, setIsMore] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [column, setColumn] = useState<number>(0);

  const { ref: quizRef } = useInView({
    threshold: 1,
    onChange: (inView) => {
      if(inView) {
        server_infiniteScroll({page, search});
      }
    }
  });
  
  const initialized = useRef(false);

  const searchPage = (val: string): void => {
    setSearch(val);
  }

  const{mutate: server_infiniteScroll, isPending} = useMutation({
    mutationFn: fetchInfiniteScroll,
    onSuccess: (data: tableResponse<quizzesResponse>) => {
      if(data) setIsMore(true);
      setQuiz( e => {
          return [...e, ...data.data];
        }
      );
      setColumn(Math.floor(data.columns/10));
      setPage(e => {
        return e + 1;
      });
    },
    onError: (e) => {
      toast(e.message);
    }
  });


  useEffect(()=>{
    if (!initialized.current) {
      initialized.current = true
      server_infiniteScroll({page, search});
    }
  }, []);

  useEffect(()=>{
    if(page > column) {
      setIsMore(false);
    }
  }, [page])

  useEffect(() => {
    
    setQuiz([]);
    setPage(0);
    setIsMore(false);
    server_infiniteScroll({page, search});

  }, [search]);

  return (
    <div className="pb-8">
      <div className="max-w-64 ml-auto py-4 pr-4">
        <Search searchPage={searchPage} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 sm:gap-y-6 px-4">
        {quiz?.map((item, index)=>{
          if (index === quiz.length - 2 && isMore) {
            return (
              <CardInfinite key={index} quiz={item} ref={quizRef} />
            )
          }
          return (
            <CardInfinite key={index} quiz={item} />
          )
        })}
        
        {isPending && <CardTemplate />}
      </div>
      {!isMore && <div className="w-full text-center py-12">Congratulation You've reach the end !</div>}
    </div>
  )
}


