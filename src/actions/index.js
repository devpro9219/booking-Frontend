import axios from 'axios';

export const setFlow = flow => {
    return {
        type: 'SET_FLOW',
        flow
    };
};


export const nextStep = () => {
    return {
        type: 'NEXT_STEP'
    };
};

export const prevStep = () => {
    return {
        type: 'PREV_STEP'
    };
};

export const jumpTo = step => {
    return {
        type: 'JUMP_TO',
        step
    };
};

export const setSelection = selection => {
    return {
        type: 'SET_SELECTION',
        selection
    };
};

export const setBreadcrump = breadcrump => {
    return {
        type: 'SET_BREADCRUMP',
        breadcrump
    };
};

export const setProgressBar = () => {
    return {
        type: 'UPDATE_PROGRESS_BAR'
    };
};

export const fetchBrands = () => {
    const url = '/json/makes';
    const request = axios.get(url);
    return {
        type: 'FETCH_BRANDS',
        payload: request
    };
};

export const fetchModels = (brandId) => { 
    const url = `/json/makes/${brandId}/models`;
    const request = axios.get(url);
    return {
        type: 'FETCH_MODELS',
        payload: request
    };
};

export const fetchVariants = (modelId) => {
    const url = `/json/models/${modelId}/variants`;
    const request = axios.get(url);
    return {
        type: 'FETCH_VARIANTS',
        payload: request
    };
};

export const calculateQuote = (data) => {
    const url = '/json/quote';
    const request = axios.post(url, data);

    return {
        type: 'CALCULATE_QUOTE',
        payload: request
    };
};

export const openModal = (modalType) => {
    const previousScrollPosition = window.pageYOffset;
    document.documentElement.classList.add('no-scroll');
    window.scrollTo(0,0);
    return {
        type: 'OPEN_MODAL',
        payload: {
            open: true,
            id: modalType,
            previousScrollPosition
        }
    };
};

export const closeModal = (previousScrollPosition) => {
    document.documentElement.classList.remove('no-scroll');
    window.scrollTo(0,previousScrollPosition);
    return {
        type: 'CLOSE_MODAL',
        payload: {
            open: false
        }
    };
};

export const registrationSuccess = () => {
    return {
        type: 'REGISTRATION_SUCCESS'
    };
};

export const registrationError = () => {
    return {
        type: 'REGISTRATION_ERROR'
    };
};
