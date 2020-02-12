import React from "react";
import { Redirect, Route, useRouteMatch } from "react-router-dom";

interface NazwaGraczaProps {
  path: string;
}

const NazwaGracza: React.FC<NazwaGraczaProps> = ({ children, ...rest }) => {
  const { url } = useRouteMatch();
  const nazwaGracza = sessionStorage.getItem("nazwaGracza");

  return (
    <Route
      {...rest}
      render={({ location }) =>
        nazwaGracza ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: `${url}/nazwa`,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default NazwaGracza;
