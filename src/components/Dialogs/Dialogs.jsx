import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;

	return <div className={s.dialog + ' ' + s.active}>
		<NavLink to={path}>{props.name}</NavLink>
	</div>
}
const Message = (props) => {
	return <div className={s.message}>{props.message}</div>
}
const Dialogs = (props) => {
	let dialogs = [
		{ id: 1, name: 'Рамиль' },
		{ id: 2, name: 'Что кушаем' },
		{ id: 3, name: 'Диана' },
		{ id: 4, name: 'Макс' },
		{ id: 5, name: 'Работа' },
		{ id: 6, name: 'Папа' },
		{ id: 7, name: 'Папа' },
	];
	let messages = [
		{ id: 1, message: "У нас сегодня акция" },
		{ id: 2, message: "Похуй и спасибо" },
		{ id: 3, message: "Спасибо высказили свое мнение" }
	];
	let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
	let messageElements = messages.map(m => <Message message={m.message} />);
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messageElements}
			</div>
		</div>
	)
}

export default Dialogs