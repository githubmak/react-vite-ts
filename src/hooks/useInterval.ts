import { useEffect, useRef } from "react";

const useInterval = (callback: () => void, delay: number) => {
  // 保存最新的 callback 函数引用
  const savedCallback = useRef<() => void>();

  // 更新最新的 callback 函数引用
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // 设置和清除定时器
  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
