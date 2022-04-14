import React from 'react'

import { ButtonBack, ButtonFront } from '../../styles/GlobalComponents/index'

const ResumeStyles = (props) => (
    <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
        <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
    </ButtonBack>
);

export default ResumeStyles
