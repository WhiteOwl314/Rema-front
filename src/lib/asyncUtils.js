import {push} from 'connected-react-router';

export const createPromiseThunk = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`,`${type}_ERROR`];

    return param => async dispatch => {
        dispatch({type, param});
        try{
            const payload = await promiseCreator(param);
            dispatch({type:SUCCESS, payload});
        } catch (e) {
            dispatch({type:ERROR, payload: e, error: true});
            console.log(e);
        }
    };
};

export const createPromiseThunkWithFunction =
    (type,promiseCreator,successFunction) => {

        const [SUCCESS, ERROR] = [`${type}_SUCCESS`,`${type}_ERROR`];

        return param => async dispatch => {
            dispatch({type, param});
            try{
                const payload = await promiseCreator(param);
                dispatch({type:SUCCESS, payload});
                successFunction(payload);
                console.log(payload);
            } catch (e) {
                dispatch({type:ERROR, payload: e, error: true});
                console.log(e);
            }
        };
};

export const createPromiseThunkForJwt =
    (type,promiseCreator,successFunction) => {

        const [SUCCESS, ERROR] = [`${type}_SUCCESS`,`${type}_ERROR`];

        return param => async dispatch => {
            dispatch({type, param});
            try{
                const payload = await promiseCreator(param);
                const {emailIsAllowed} = payload;


                if (!emailIsAllowed){
                    console.log(payload);
                    alert('이메일 인증이 필요합니다.');
                } else {
                    successFunction(param.username, payload.token);
                }
                dispatch({type:SUCCESS, payload});

            } catch (e) {
                alert('로그인 실패했습니다.');
                dispatch({type:ERROR, payload: e, error: true});
            }
        };
    };

export const createPromiseThunkWithPromise = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`,`${type}_ERROR`];

    return param => async (dispatch,getState,{history}) => {
        dispatch({type, param});

        await promiseCreator(param)
            .then(response => {
                const payload = response.data;
                dispatch({type:SUCCESS, payload});
            })
            .catch(error => {
                const status = error.response.status;
                const payload = error.data;
                dispatch({type:ERROR, payload: status, error: true});
                if(
                    status === 403
                    || status === 401
                ){
                    dispatch(push('/member/login'));
                }
                if(status === 404){
                    dispatch(push('/404'))
                }
            });
    };
};


export const reducerUtils = {
    initial: (initialData = null) => ({
        loading: false,
        data: initialData,
        error: null
    }),
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null
    }),
    success: payload => ({
        loading: false,
        data: payload,
        error: null
    }),
    error: error => ({
        loading: false,
        data: null,
        error: error
    })
};

export const handleAsyncActions = (type, key, keepData = false) => {
    const [SUCCESS, ERROR] =
        [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
        switch (action.type) {
            case type:
                return{
                    ...state,
                    [key]: reducerUtils.loading(keepData
                        ? state[key].data
                        : null
                    )
                };
            case SUCCESS:
                return{
                    ...state,
                    [key]: reducerUtils.success(action.payload)
                };
            case ERROR:
                return{
                    ...state,
                    [key]: reducerUtils.error(action.payload)
                };
            default:
                return state;
        }
    };
};

const defaultIdSelector = param => param;
export const createPromiseThunkById = (
    type,
    promiseCreator,
    idSelector = defaultIdSelector
) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`,`${type}_ERROR`];

    return param => async dispatch => {
        const id = idSelector(param);
        dispatch({type,meta: id});
        try{
            const payload = await promiseCreator(param);
            dispatch({type: SUCCESS, payload, meta: id});
        }catch (e) {
            dispatch({type: ERROR, error: true, payload: e, meta: id});
        }
    };
};

export const handleAsyncActionById = (type, key, keepData = false) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
        const id = action.meta;
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.loading(
                            keepData
                                ?state[key] && state[key][id].data
                                : null
                        )
                    }
                }
            case SUCCESS:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.success(action.payload)
                    }
                };
            case ERROR:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.error(action.payload)
                    }
                };
            default:
                return state
        }
    };
};