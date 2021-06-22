// import { NoteProvider } from "../../../util/interfaces";
import { Link } from "react-router-dom";
import TickItem from "./TickItem";

const TodoCard = ({ todo }: any) => {
	return (
		<Link to={`/note/${todo.id}`}>
			<div className='card'>
				<h3>{todo?.title?.length > 23 ? todo.title.slice(0, 22) + "..." : todo.title}</h3>
				<span className='userName'>@{todo?.user?.name}</span>

				<div className='cardContent'>
					{todo?.noteItems &&
						[...todo?.noteItems]
							.reverse()
							.map((tick, index: any) => <TickItem listItem={tick?.note} isChecked={tick?.checked} key={index} />)}
				</div>
			</div>
		</Link>
	);
};

export default TodoCard;
