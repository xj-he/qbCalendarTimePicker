import React, { Component, PropTypes } from 'react';
import ReactDOM, {render}  from 'react-dom';
import DateTimeField from "react-bootstrap-datetimepicker";
import DateTimePicker from "react-bootstrap-datetimepicker";
import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from "moment";


class QBCalendarTimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "2016-03-14",
      format: "YYYY-MM-DD",
      inputFormat: "DD/MM/YYYY",
      startDate: moment().subtract(29, 'days'),
      endDate: moment(),
      mode: "date",
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last week': [moment().subtract(6, 'days'), moment()],
        'Last 30 days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
        'Last Year': [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')]
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleChange (newDate) {
    console.log("newDate", newDate);
    return this.setState({date: newDate});
  }

  handleEvent (event, picker) {
    return this.setState({
      startDate: picker.startDate,
      endDate: picker.endDate
    });
  }

  handleStartDateChange (newDate) {
    this.setState({startDate: moment(Number(newDate))});
  }

  handleEndDateChange (newDate) {
    this.setState({endDate: moment(Number(newDate))});
  }

  render() {
    const {date, format, mode, inputFormat, endDate, startDate} = this.state;

    let results = this.props.range? this.props.range : 'nothing';

    if (results === 'fromto') {
    	return(
    		<div className="row">
    			<div className="col-xs-6">
	    			<DateTimeField id='startDateTimeField' defaultText="Start Date" maxDate={endDate} onChange={this.handleStartDateChange} viewMode={mode} />
	    		</div>
	    		<div className="col-xs-6">
	    			<DateTimeField id='endDateTimeField' defaultText="End Date" minDate={startDate} onChange={this.handleEndDateChange} viewMode={mode} />
	    		</div>
    		</div>
    	);
    } 

    if (results === 'group') {
      var start = this.state.startDate.format('YYYY-MM-DD');
      var end = this.state.endDate.format('YYYY-MM-DD');
      var label = start + ' ~ ' + end;
      if (start === end) {
        label = start;
      }

    	return(
        <DateRangePicker ranges={this.state.ranges} onEvent={this.handleEvent}>
          <button className="selected-date-range-btn" style={{width:'100%'}}>
            <div className="pull-left">
              <span>
                {label}
              </span>
              <span className="caret"></span>
            </div>
          </button>
        </DateRangePicker>
      );
  	}
  }
}

module.exports = QBCalendarTimePicker;