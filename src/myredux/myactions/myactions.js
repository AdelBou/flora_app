export  function setProgress  (progress)  {
    return {
        type: 'set_progress',
        payload: progress
    };
}
export   function setSleep  (sleep)  {

    return {
        type: 'set_sleep',
        payload: sleep
    };
}
export   function setHoure (nbhoure)  {
    return {
        type: 'set_houre',
        payload: nbhoure
    };
}
export   function setStateFlora (stateflora)  {

    return {
        type: 'set_state_flora',
        payload: stateflora
    };
}

export   function setEat (food)  {

    return {
        type: 'set_eat',
        payload: food
    };
}
export   function setIll (ill)  {

    return {
        type: 'set_ill',
        payload: ill
    };
}
export   function setHangry (hangry)  {

    return {
        type: 'set_hangry',
        payload: hangry
    };
}

export   function setdidEat (eat)  {

    return {
        type: 'set_did_eat',
        payload: eat
    };
}
export   function setDirty (eat)  {

    return {
        type: 'set_dirty',
        payload: eat
    };
}