import React, { Component } from "react";
import ReactDOM from "react-dom";
import DateTimeField from "react-bootstrap-datetimepicker";
import DateTimePicker from "react-bootstrap-datetimepicker";
import DateTimePickerDate from "react-bootstrap-datetimepicker";
import QBCalendarTimePicker from "./qbCalendarTimePicker";
import DateTime from "react-datetime";
import moment from "moment";
import "moment/locale/ja";

class Demo extends Component {
	
	render() {
		return (
			<div className="container">
		      <div className="row">
	            <div className="col-xs-6">
	              <h5>Example [DateTimeField widget] [react-bootstrap-datetimepicker]</h5>
	              <DateTimeField defaultText="Please select a date" locale="ja"/>
	            </div>
	          </div>
	          <hr/>
	          <div className="row">
	            <div className="col-xs-6">
	              <h5>Example [DateTimePickerDate] [react-bootstrap-datetimepicker] using time mode</h5>
	              <DateTimePickerDate mode="time"/>
	            </div>
	          </div>
	          <hr/>
	          <div className="row">
	            <div className="col-xs-6">
	              <h5>Example [DateTime] [react-datetime] with Japanese local</h5>
	              <DateTime locale="ja"/>
	            </div>
	          </div>
	          <hr/>
	          <div className="row">
	          	<div className="col-xs-12">
	              <h5>Example QBCalendarTimePicker with [react-bootstrap-datetimepicker] implementation</h5>
	            </div>
	            <div className="col-xs-6">
	              <QBCalendarTimePicker range={'fromto'}/>
	            </div>
	          </div>
	          <hr/>
	          <div className="row">
	          	<div className="col-xs-12">
	              <h5>Example QBCalendarTimePicker with [react-bootstrap-daterangepicker] implementation</h5>
	            </div>
	            <div className="col-xs-6">
	              <QBCalendarTimePicker range={'group'}/>
	            </div>
	          </div>
			</div>
		);
	}
}

ReactDOM.render(React.createFactory(Demo)(), document.getElementById("root"));