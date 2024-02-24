import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    status:"",
    questions:null,
    currentQuestionIndex:0,
    currentAnswerIndex:null,
    points:0,
    total:null,
    correctAnswers:[],
    wrongAnswers:[],
    error:""
}

export const fetchData = createAsyncThunk('question/fetchData', async ()=> {
    const res = await fetch('http://localhost:3000/data')
    return res.json()
})
const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        submitAnswer(state, action) {
            state.currentAnswerIndex = action.payload
        },
        nextQuestion(state, action) {
            if (
                state.questions[state.currentQuestionIndex].correct_choice
                === state.currentAnswerIndex+1
                )
                {
                    state.points += state.questions[state.currentQuestionIndex].degree
                    state.correctAnswers = [...state.correctAnswers, state.questions[state.currentQuestionIndex]]
                }
            else state.wrongAnswers= [
                ...state.wrongAnswers,
                 {...state.questions[state.currentQuestionIndex], answer:state.currentAnswerIndex}]
                state.currentQuestionIndex += 1
                state.currentAnswerIndex = null
        },
        preQuestion(state) {
            state.currentQuestionIndex -= 1
            state.currentAnswerIndex = null
        },

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchData.pending, (state)=>{state.status = "loading"})
        .addCase(fetchData.fulfilled, (state, action)=> {
            state.status = "ready"
            state.total = action.payload.Tot_degree
            state.questions = action.payload.questions
        })
        .addCase(fetchData.rejected, (state, action)=> {
            state.status = "failed"
            state.error = action.error.message
        })

    }
})


export const { 
    isLoading,
    dataLoaded,
    submitAnswer,
    nextQuestion,
    preQuestion } = questionSlice.actions;
export default questionSlice.reducer;