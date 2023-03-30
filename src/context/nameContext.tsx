import React, { createContext, useReducer, useContext } from "react";
import type { Dispatch } from 'react'

const initialData = {
  firstName: 'grow',
  lastName: 'ydp'
}

interface IName {
  firstName: string;
  lastName: string;
}

interface IAction extends IName {
  type: 'setFirstName' | 'setLastName',
}

const reducer = (state: IName, action: IAction) => {
  switch (action.type) {
    case 'setFirstName':
        return { ...state, firstName: action.firstName }
    case 'setLastName':
        return { ...state, lastName: action.lastName }
    default:
        throw new Error('unexpected action type')
  }
}

const Pure: React.FC = () => {
  return (
    <div>rendered at { Date.now() }</div>
  )
}

const PersonContext = createContext<any>(initialData)

const PersonFirstName: React.FC = () => {
  const [state, dispatch] = useContext(PersonContext)
  return (
    <div>
      First Name:
      <input
        value={state.firstName}
        onChange={(e) => e.target.value && dispatch({ type: 'setFirstName', firstName: e.target.value })}
      />
      <Pure />
    </div>
  )
}

const PersonLastName: React.FC = () => {
  const [state, dispatch] = useContext(PersonContext)
  return (
    <div>
      Last Name:
      <input
        value={state.lastName}
        onChange={(e) => e.target.value && dispatch({ type: 'setLastName', lastName: e.target.value })}
      />
      <Pure />
    </div>
  )
}

const Greeting: React.FC = () => {
  const [state] = useContext(PersonContext)
  return (
    <div>
      HI, { state.firstName } - { state.lastName }
      <Pure />
    </div>
  )
}

const PersonContextWrapper: React.FC<any> = (props) => {
  return (
    <PersonContext.Provider value={useReducer(reducer, initialData)}>
      { props.children }
    </PersonContext.Provider>
  )
}

const NameContext: React.FC = () => {
  return (
    <div>
      <PersonContextWrapper>
        <Greeting />
        <div>
          <PersonFirstName />
        </div>
        <div>
          <PersonLastName />
        </div>
      </PersonContextWrapper>
    </div>  
  )
}

export default NameContext