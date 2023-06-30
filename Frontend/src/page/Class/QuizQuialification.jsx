import React from "react";
import NavigateClass from "../../components/NavigationClass";
import ContenerClass from "../../components/ContenerClass";
import StudentsList from "../../components/StudentsList";
import AnswerQuialification from "../../components/AnswerQuialification";
import Jobs from "../../components/jobs";

function QuizQuialification() {
    return(
        <>
            <NavigateClass />
            <ContenerClass>
                <Jobs />
                <AnswerQuialification />
                <StudentsList />
            </ContenerClass>
        </>
    )
}

export default QuizQuialification