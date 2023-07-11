import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthLayout } from "./layout/Auth.layout";
import { Login } from "./modules/Authentication/Login";
import { SignUp } from "./modules/Authentication/SignUp";

// Plus Jakarta Sans font variables
import "@fontsource/plus-jakarta-sans";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/plus-jakarta-sans/300-italic.css";
import "@fontsource/plus-jakarta-sans/400-italic.css";
import "@fontsource/plus-jakarta-sans/500-italic.css";
import "@fontsource/plus-jakarta-sans/600-italic.css";
import "@fontsource/plus-jakarta-sans/700-italic.css";
import "@fontsource/plus-jakarta-sans/800-italic.css";

// Poppins font variables
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import "@fontsource/poppins/400-italic.css";
import "@fontsource/poppins/500-italic.css";
import "@fontsource/poppins/600-italic.css";
import "@fontsource/poppins/700-italic.css";
import "@fontsource/poppins/800-italic.css";
import "@fontsource/poppins/900-italic.css";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="" index element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
