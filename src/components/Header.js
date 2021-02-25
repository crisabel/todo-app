import React, { useState, useEffect } from 'react'

const Header = ({}) => {
    const [editMode, toggleEditMode] = useState(false);
    const [headerText, setHeaderText] = useState("Todo List");

    useEffect(() => {
        getLocalHeader();
      }, []);

    const getLocalHeader = () => {
        if(localStorage.getItem("header") === null) {
          localStorage.setItem("header", headerText);
        } else {
          let headerLocal = localStorage.getItem("header");
          setHeaderText(headerLocal);
        }
      }

    const blurHandler = () => {
        toggleEditMode(false);
    }

    const onChangeHandler = (event) => {
        setHeaderText(event.target.value);
        localStorage.setItem("header", event.target.value);
    }

    const headerSubmitHandler = (event) => {
        event.preventDefault();
    }

    if (editMode) {
        return (
            <form>
                <input
                    value={headerText}
                    text={headerText} 
                    onBlur={blurHandler}
                    onChange={onChangeHandler}
                    onSubmit={headerSubmitHandler}
                    className="header-input" 
                    autoFocus
                />
            </form>
        );
    } else {
        return (
            <header 
                value={headerText}
                onClick={() => toggleEditMode(true)}
                type="text"
            >
                <h1>{headerText}</h1>
            </header>
        );
    }
};

export default Header;