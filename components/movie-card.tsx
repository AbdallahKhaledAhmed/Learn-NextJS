import { deleteMovie } from "@/formActions/actions";
import Modal from "./modal";

export type movie = {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
};

export default function MovieCard(props: movie) {
  return (
    <div className="flex flex-col shadow-2xl rounded-xl px-10 py-3 w-75 bg-white space-y-2">
      <h2 className="font-bold text-lg">{props.title}</h2>
      <img
        src={props.imgUrl}
        alt={props.title}
        className="object-cover rounded"
      />
      <p className="mb-auto">{props.description}</p>
      <form className="contents">
        <input
          type="text"
          name="id"
          hidden
          readOnly
          value={props.id}
        />
        <button
          className="w-fit rounded-lg bg-red-500 text-white px-3 py-2"
          formAction={deleteMovie}
        >
          Delete
        </button>
      </form>
      <Modal {...props} />
    </div>
  );
}
