import React, { useEffect, useState } from "react";

import { ToDoList } from "../components/ToDoList";
import styled from "styled-components";
import { fetchLists } from "../services/listService";
import { Tabs } from "@mantine/core";
import { SharedLists } from "../components/SharedLists";
import { MyLists } from "../components/MyLists";

export const Homepage = () => {
  return (
    <>
      <Wrapper>
        <Tabs>
          <Tabs.Tab label="My lists">
            <MyLists />
          </Tabs.Tab>
          <Tabs.Tab label="Shared lists">
            <SharedLists />{" "}
          </Tabs.Tab>
        </Tabs>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;
