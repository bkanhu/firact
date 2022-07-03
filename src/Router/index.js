import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import AndroidLarge1 from '../Components/AndroidLarge1';
import AndroidLarge7 from '../Components/AndroidLarge7';
import AndroidLarge4 from '../Components/AndroidLarge4';
import AndroidLarge9 from '../Components/AndroidLarge9';
import AndroidLarge10 from '../Components/AndroidLarge10';
import AndroidLarge12 from '../Components/AndroidLarge12';
import AndroidLarge5 from '../Components/AndroidLarge5';
import AndroidLarge6 from '../Components/AndroidLarge6';
import AndroidLarge8 from '../Components/AndroidLarge8';
import Frame8 from '../Components/Frame8';
import AndroidLarge2 from '../Components/AndroidLarge2';
import AndroidLarge3 from '../Components/AndroidLarge3';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/androidlarge1"><AndroidLarge1 /></Route>
				<Route exact path="/androidlarge7"><AndroidLarge7 /></Route>
				<Route exact path="/androidlarge4"><AndroidLarge4 /></Route>
				<Route exact path="/androidlarge9"><AndroidLarge9 /></Route>
				<Route exact path="/androidlarge10"><AndroidLarge10 /></Route>
				<Route exact path="/androidlarge12"><AndroidLarge12 /></Route>
				<Route exact path="/androidlarge5"><AndroidLarge5 /></Route>
				<Route exact path="/androidlarge6"><AndroidLarge6 /></Route>
				<Route exact path="/androidlarge8"><AndroidLarge8 /></Route>
				<Route exact path="/frame8"><Frame8 /></Route>
				<Route exact path="/androidlarge2"><AndroidLarge2 /></Route>
				<Route exact path="/androidlarge3"><AndroidLarge3 /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;