import React from "react";
import NavigateClass from "../../components/NavigationClass";
import ContenerClass from "../../components/ContenerClass";
import StudentsList from "../../components/StudentsList";
import Jobs from "../../components/jobs";
import QuizList from "../../components/QuizList";
import MainQuiz from "../../components/MainQuiz";
import ModEditor from "../../components/ModEditorQuiz";

function QuizClass() {
  return (
    <>
      <NavigateClass />
      <ContenerClass>
        <MainQuiz />
        <QuizList />
        <StudentsList />
        <ModEditor />
      </ContenerClass>
    </>
  );
}

export default QuizClass;
        