import { addMovie } from "@/formActions/actions";

export default function AddMovie() {
  return (
    <div className="px-30 py-10 space-y-5">
      <h1 className="text-4xl font-bold">Add New Movie</h1>
      <form action={addMovie} className="flex flex-col gap-3">
        <label>
          <p className="font-medium text-gray-700">Title</p>
          <input
            type="text"
            name="title"
            className="rounded border-gray-300 border px-2"
          />
        </label>
        <label>
          <p className="font-medium text-gray-700">Description</p>
          <input
            type="text"
            name="desc"
            className="rounded border-gray-300 border px-2"
          />
        </label>
        <label>
          <p className="font-medium text-gray-700">Image URL</p>
          <input
            type="text"
            name="img"
            className="rounded border-gray-300 border px-2"
          />
        </label>
        
        <button className="rounded-md p-3 text-white font-medium bg-black w-fit">
          Add Movie
        </button>
      </form>
    </div>
  );
}
