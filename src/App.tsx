import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "styles/styles";
import { useReactiveVar } from "@apollo/client";
import AppRouter from "AppRouter";
import { isLoggedInVar, darkModeVar } from "apollo";
import { useForm } from "react-hook-form";

interface IForm {
  firstName: string;
  lastName?: string;
}

const App = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  const { register, handleSubmit, getValues } = useForm<IForm>({
    mode: "onSubmit",
    defaultValues: {
      firstName: "world",
      lastName: "Hello",
    },
  });
  const onValid = () => {
    const { firstName, lastName } = getValues();
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppRouter isLoggedIn={isLoggedIn} />
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("firstName")} name="firstName" type="text" />
        <input {...register("lastName")} name="lastName" type="text" />
      </form>
    </ThemeProvider>
  );
};

export default App;
