import firebase from "./firebase.config";
import "firebase/firestore";

const db = firebase.firestore();
// const timeStamp = { timestampsInSnapshots: true };
// db.settings(timeStamp);

export const getNotes = async () => {
	return await db
		.collection("Notes")
		.get()
		.then((snapshort) => {
			return snapshort.docs.map((doc) => doc.data());
		});
};

export const setNote = (args: any) => {
	db.collection("Notes")
		.doc(args.id + "")
		.set(args);
	// db.collection("Notes").doc().add(args);
};

export const updateFirebaseNote = (args: any) => {
	db.collection("Notes")
		.doc(args.id + "")
		.update(args);
};

export default db;
