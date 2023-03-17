import React from 'react'
import moment from 'moment'
import 'moment/locale/ru'

export default function DateTimePrettyHOC (Component, type) {
  return class DateTimePretty extends React.Component {
    componentDidUpdate(){
    }
    dateNow = (date) => {
      moment.locale('ru')
      let start = moment(date);
      let end   = moment(new Date());
      return end.to(start);
    }
    render(){
      const {date} = this.props;
      let info = this.dateNow(date)
      return (
        <Component data={info}/>
      )
    }
  } 
}
