import React from "react";
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component{
   constructor(props){
      super(props);
      this.state = {hasError: false};
   }

   // Отловили ошибку
   static getDerivedStateFromError() {
      // Обновить состояние, чтобы следующий рендер показал запасной UI.
      return { hasError: true };
    }

   //  Показали, что за ошибка
    componentDidCatch(error, errorInfo) {
      logErrorToMyService(error, errorInfo);
    }

   //  Отрисовали что-то взамен 
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong!</h1>;
      }
  
      return this.props.children; 
    }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
   children: PropTypes.node,
};

function logErrorToMyService(error, errorInfo) {
   console.error("Caught an error:", error, errorInfo);
}