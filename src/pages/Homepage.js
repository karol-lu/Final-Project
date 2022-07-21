import React from "react";
import styled from "styled-components";
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
