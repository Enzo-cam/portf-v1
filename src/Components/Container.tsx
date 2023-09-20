import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({children}) => {
  return (
    <div className={"px-4 sm:px-6 lg:px-8 mx-auto relative z-10 max-w-screen-lg"}>
      {children}
    </div>
  );
};

export default Container;