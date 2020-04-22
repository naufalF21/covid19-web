import './styles/styles.css';
import './components/app-bar';
import Main from './view/main';

const displayTime = () => {
	moment.locale('id');
	$('#time').text(moment().format('LTS'));
	$('#date').text(moment().format('LL'));
};

const updateTime = () => {
	displayTime();
	setTimeout(updateTime, 1000);
};

updateTime();

Main();
