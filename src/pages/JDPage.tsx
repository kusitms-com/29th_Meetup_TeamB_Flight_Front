import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import BundledEditor from "../components/editor/BundleEditor";

const StyledDivContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #FBFBFD;
`;

const CenteredContainer = styled(motion.div)`
  width: 45%; 
  border-radius: 10px;
  background: #FFF;
  padding: 2rem;
  margin: 1rem;
`;

const StyledHeader = styled.h2`
  font-size: 20;
  font-weight: bold;
`;

const ExperienceContainer = styled(motion.div)`
  width: 45%;
  border-radius: 10px;
  padding: 2rem;
  margin: 1rem;
  background: #F7F7FB;
  box-shadow: 5px 5px 10px 0px rgba(166, 170, 192, 0.09);
  height: 35rem;
`;

const JDContainer = styled(motion.div)`
  width: 45%;
  border-radius: 10px;
  padding: 2rem;
  margin: 1rem;
  background: #F7F7FB;
  box-shadow: 5px 5px 10px 0px rgba(166, 170, 192, 0.09);
  height: 35rem;
`;

const JDButton = styled.button`
  position: absolute;          
  right: 0;      
  top: 5rem;                      
  transform: translateY(-50%);    
`;

const ExperienceButton = styled.button`
  position: absolute;          
  right: 0;                  
  top: 7rem;                      
  transform: translateY(-50%);    
`;

const JDPage: React.FC = () => {
  const [activeContainer, setActiveContainer] = useState<null | "JD" | "Exp">(
    null
  );

  const toggleContainer = (container: "JD" | "Exp") => {
    if (activeContainer === container) {
      setActiveContainer(null);
    } else {
      setActiveContainer(container);
    }
  };

  const [content, setContent] = useState("<p>이곳에 내용을 입력하세요</p>");

  const handleEditorChange = (newContent: string) => {
    console.log("Content was updated:", newContent);
    setContent(newContent);
  };

  return (
    <StyledDivContainer className="page">
      <CenteredContainer
        initial={{ width: "45%" }}
        animate={{
          x: activeContainer ? "-10%" : "0%",
          width: activeContainer ? "45%" : "70%",
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 20,
          when: "beforeChildren",
        }}
      >
        <StyledHeader>1. 지원동기</StyledHeader>
        <div>
          <BundledEditor
            content={content}
            onContentChange={handleEditorChange}
          />
        </div>
        <StyledHeader>2. </StyledHeader>
        <div>
          <BundledEditor content="" onContentChange={handleEditorChange} />
        </div>
      </CenteredContainer>
      <AnimatePresence>
        {activeContainer === "JD" && (
          <JDContainer
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "200%", transition: { delay: 0.3 } }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            JD공고가 보여지는 창입니다.
          </JDContainer>
        )}
        {activeContainer === "Exp" && (
          <ExperienceContainer
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "200%", transition: { delay: 0.3 } }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            경험 분석이 보여지는 창입니다.
          </ExperienceContainer>
        )}
      </AnimatePresence>
      <JDButton onClick={() => toggleContainer("JD")}>JD분석</JDButton>
      <ExperienceButton onClick={() => toggleContainer("Exp")}>
        경험분석
      </ExperienceButton>
    </StyledDivContainer>
  );
};

export default JDPage;
