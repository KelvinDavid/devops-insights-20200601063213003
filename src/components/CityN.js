import React, { useState } from 'react';

function CityN(props) {

    const [validationError, setValidationError] = useState(null);

    const validate = (event) => {
        const cityNPattern = /^[a-zA-Z]+$/;
        const valid = cityNPattern.test(event.target.value);
        if (!valid) {
            setValidationError('* should have at least 1 character which can be only lower/upper case a-z');
            props.clearResponse();
        } else {
            setValidationError('');
            props.onCityNChange(event.target.value);
        }
    };

    return (
        <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-10">
                    <style jsx="true">{`
                        .form-control::-webkit-input-placeholder {
                            color: #ddd;
                        }
                    `}
                    </style>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="usr" 
                        placeholder="US Zip Code (5 digit)"
                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                validate(event);
                            }
                        }}
                    ></input>   
                </div>
            </div>
            <div className="pl-3 row">
                <div className="text-danger small"> { validationError }</div>
            </div>
        </div>
    );
}

export default CityN