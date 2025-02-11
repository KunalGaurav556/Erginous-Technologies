import React from 'react'


const Routing = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/LogInPage' exact element={<LogInPage/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing