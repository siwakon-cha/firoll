import React, { ReactElement } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-[112px] font-bold">Welcome to Web3</h1>
        <h1 className="text-[90px] font-bold">Sport Bet</h1>
        <Button color="primary" onClick={() => router.push('/sport')}>
          BET NOW
        </Button>
        <p className="m-4 text-center text-2xl">Powered by FiRoll Protocol</p>
        <p className="m-4 text-center text-xl">
          Under 18 Protected By WorldCoin
        </p>
      </div>
    </div>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Index;
