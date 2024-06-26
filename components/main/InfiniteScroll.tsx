"use client";
import { quizzesResponse, tableResponse } from "@/utils/definition";
import { fetchInfiniteScroll } from "@/utils/main/infiniteScroll";
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query"
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import Search from "../Table/Search";
import { useInView } from "react-intersection-observer";
import CardInfinite from "./CardInfinite";

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
  const [isMore, setIsMore] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  const { ref: quizRef, inView: quizInView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  
  const initialized = useRef(false)

  const searchPage = (val: string): void => {
    setSearch(val);
  }

  const{mutate: server_infiniteScroll, isPending} = useMutation({
    mutationFn: fetchInfiniteScroll,
    onSuccess: (data: tableResponse<quizzesResponse>) => {
      toast("Success");
      setQuiz( e => {
          return [...e, ...data.data]
        }
      );
      setPage(e => {

        if(Math.floor(data.columns / 10)-1 == e) {
          setIsMore(false);
          console.log("we're out");
        } else {
          setIsMore(true);
        }

        return e + 1
      });
      
      console.log("fetch" + page);
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

  useEffect(() => {

    if(quizInView) {
      server_infiniteScroll({page, search});
    }

  }, [quizInView])

  useEffect(() => {
    
    setQuiz([]);
    setPage(0);
    server_infiniteScroll({page, search});

  }, [search]);

  return (
    <div className="pb-8">
      <div className="max-w-64 ml-auto py-4 pr-4">
        <Search searchPage={searchPage} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 sm:gap-y-6 px-8">
        {quiz?.map((item, index)=>{
          if (index === quiz.length - 2 && isMore) {
            return (
              <div key={index} className="h-96" ref={quizRef}>
                {item.id}
                {item.name}
              </div>
            )
          }
          return (
            <CardInfinite key={index} quiz={item} />
          )
        })}
        {isPending && <div>pending</div>}
      </div>
        
    </div>
  )
}


