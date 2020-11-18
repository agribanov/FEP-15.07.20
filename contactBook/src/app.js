import '../../common/css/normalize.css';
import 'webpack-jquery-ui/css'
import '../../common/css/skeleton.css';
import '../../common/css/dark-theme.css';
import './styles.css';

import $ from 'jquery';
import Controller from './mvc/Controller';

$(() => new Controller($('#root')));