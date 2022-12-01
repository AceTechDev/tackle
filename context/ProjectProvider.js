import React, { useContext, useState, useEffect } from 'react'

const ProjectContext = React.createContext({});

export const ProjectProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  return (
    <ProjectContext.Provider value={{userData, setUserData}}>
      {children}
    </ProjectContext.Provider>
  )
}
export const useProjectContext = () => {
  return useContext(ProjectContext)
}
