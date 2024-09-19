import FullScreenWrapper from "@/components/layouts/FullScreenWrapper";
import TodoList from "@/components/TodoList";
import React, { useState } from "react";

const Page = () => {
  return (
    <div>
      <FullScreenWrapper>
      <TodoList />
      </FullScreenWrapper>
    </div>
  );
};

export default Page;
