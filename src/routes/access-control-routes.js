import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  arrayOf, bool, shape, string, object,
} from 'prop-types';

const AccessControlRoutes = (props) => {
  const { routes: userRoutes, user: { token } } = props;

  const { pathname } = window.location;
  const urlPath = pathname.replace(/^\/([^/]*).*$/, '$1');

  if (userRoutes[urlPath] && userRoutes[urlPath].routes) {
    const { initalComponent: HomeComponent, urlPrefix, routes } = userRoutes['user'];
    const updatedRoutes = [ ...routes ];

    return (
      <HomeComponent { ...props } routes={ updatedRoutes }>
        <Switch>
          { updatedRoutes.map((route) => {
            const { component: RouteComponent, exact, title, path, subRoutes, urlPrefix: innerRoute } = route;

            if (subRoutes) {
              return <Route
                render={ (props) =>
                  <RouteComponent
                    subRoutes={ subRoutes }
                    urlPrefix={ innerRoute }
                    { ...props }/>
                }
                exact={ exact }
                key={ title }
                path={ `${urlPrefix || ''}${path}` } />;
            }
            return <Route component={ RouteComponent } exact={ exact } key={ title } path={ `${urlPrefix || ''}${path}` } />;
          })}
        </Switch>
      </HomeComponent>
    );
  }

  return <Redirect to="/" />;
};

AccessControlRoutes.propTypes = {
  location: shape({
    pathname: string.isRequired,
    search: string.isRequired,
  }),
  routes: shape({
    admin: shape({
      initalComponent: object.isRequired,
      routes: arrayOf(shape({
        exact: bool.isRequired,
        path: string.isRequired,
        title: string.isRequired,
      })),
    }),
  }),
};

export default connect(({ User: { user } }) => ({ user }))(AccessControlRoutes);
