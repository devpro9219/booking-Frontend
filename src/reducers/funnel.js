const defaultState = {
    flows: {
        1: {
            steps: [
                'options',
                'sub-options-1',
                'car-selection',
                'car-model-selection',
                'car-engine-selection',
                'car-registration-date-input',
                'age-input-step',
                'postal-code-input',
                'insurance-selection',
                'kasko-insurance-selection',

                'insurance-story-step',

                'offer-final-step',
                'user-registration-step',
                'banking-information-step',
                'login-information-step',
                'current-insurance-info-step',
                'registration-final-step',
                'final-step'
            ]
        },
        '1b': {
            steps: [
                'options',
                'sub-options-1',
                'vehicle-registration-car-selection',
                'age-input-step',
                'postal-code-input',
                'insurance-selection',
                'kasko-insurance-selection',
                'offer-final-step',
                'user-registration-step',
                'banking-information-step',
                'login-information-step',
                'current-insurance-info-step',
                'registration-final-step',
                'final-step'
            ]
        },
        2: {
            steps: [
                'options',
                'sub-options-1',
                'car-selection',
                'car-model-selection',
                'car-engine-selection',
                'car-registration-date-input',
                'age-input-step',
                'postal-code-input',
                'offer-final-step',
                'user-registration-step',
                'banking-information-step',
                'login-information-step',
                'current-insurance-info-step',
                'registration-final-step',
                'final-step'
            ]
        },
        '2b': {
            steps: [
                'options',
                'sub-options-1',
                'vehicle-registration-car-selection',
                'age-input-step',
                'postal-code-input',
                'offer-final-step',
                'user-registration-step',
                'banking-information-step',
                'login-information-step',
                'current-insurance-info-step',
                'registration-final-step',
                'final-step'
            ]
        },
        3: {
            steps: [
                'options',
                'sub-options-2',
                'sub-options-1',
                'car-selection',
                'car-model-selection',
                'car-engine-selection',
                'car-registration-date-input',
                'age-input-step',
                'postal-code-input',
                'insurance-selection',
                'kasko-insurance-selection',
                'offer-final-step',
                'user-registration-step',
                'banking-information-step',
                'login-information-step',
                'current-insurance-info-step',
                'registration-final-step',
                'final-step'
            ]
        },
        '3b': {
            steps: [
                'options',
                'sub-options-2',
                'sub-options-1',
                'vehicle-registration-car-selection',
                'age-input-step',
                'postal-code-input',
                'insurance-selection',
                'kasko-insurance-selection',
                'offer-final-step',
                'user-registration-step',
                'banking-information-step',
                'login-information-step',
                'current-insurance-info-step',
                'registration-final-step',
                'final-step'
            ]
        }
    },
    currentFlow: null,
    currentStepIndex: 0,
    selections: [],
    breadcrump: {},
    transitionDirection: null,
    brands: [],
    models: [],
    variants: [],
    modal: {
        open: false
    }
}

const funnel = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_FLOW':
            if(action.flow === 'b') {
                return {
                    ...state,
                    currentFlow: state.currentFlow.includes('b') ? state.currentFlow : state.currentFlow + action.flow,
                    originalFlow: state.currentFlow.includes('b') ? state.currentFlow.slice(0,-1) : state.currentFlow
                }
            }
            return {
                ...state,
                currentFlow: action.flow,
                currentStepIndex: state.currentStepIndex !== 0 ? state.currentStepIndex : 1,
                originalFlow: null,
                transitionDirection: null
            }
        case 'NEXT_STEP':
            return {
                ...state,
                currentStepIndex: state.currentStepIndex + 1,
                transitionDirection: null
            }
        case 'PREV_STEP':
            if(state.currentStepIndex === 1  || state.currentStepIndex === 0) {
                return {
                    ...state,
                    currentStepIndex: 0,
                    currentFlow: null,
                    originalFlow: null,
                    transitionDirection: 'right'
                }
            }
            return {
                ...state,
                currentStepIndex: state.currentStepIndex - 1,
                transitionDirection: 'right'
            }
        case 'JUMP_TO':
            if(action.step === 'start') {
                return {
                    ...state,
                    currentFlow: null,
                    currentStepIndex: 0,
                    breadcrump: {},
                    transitionDirection: 'right'
                }
            }

            return {
                ...state,
                currentStepIndex: action.step,
                transitionDirection: 'right'
            }

        case 'SET_SELECTION':
            return {
                ...state,
                selections: {...state.selections, ...action.selection}
            }
        case 'SET_BREADCRUMP':
            return {
                ...state,
                breadcrump: {
                    ...state.breadcrump
                    ,
                    [state.currentFlow]: {...state.breadcrump[state.currentFlow], ...action.breadcrump[state.currentFlow]}
                }
            }
        case 'FETCH_BRANDS':
            return {
                ...state,
                brands: [...action.payload.data]
            }
        case 'FETCH_MODELS':
            return {
                ...state,
                models: [...action.payload.data]
            }
        case 'FETCH_VARIANTS':
            return {
                ...state,
                variants: [...action.payload.data]
            }
        case 'CALCULATE_QUOTE':
            return {
                ...state,
                quote: { ...action.payload.data }
            }
        case 'OPEN_MODAL':
            return {
                ...state,
                modal: action.payload
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                modal: {
                    open: false
                }
            }
        case 'REGISTRATION_SUCCESS':
            return {
                ...state,
                registrationSuccess: true
            }
        case 'REGISTRATION_ERROR':
            return {
                ...state,
                registrationSuccess: false
            }
        default:
            return state
    }
}

export default funnel;
