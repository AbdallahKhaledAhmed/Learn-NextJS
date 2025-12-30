"use client";
import { useRef } from "react";
import { movie } from "./movie-card";
import { editMovie } from "@/formActions/actions";

export default function Modal(props: movie) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        onClick={() => dialogRef.current?.showModal()}
        className="w-fit rounded-lg px-3 py-2"
        type="button"
      >
        Edit
      </button>

      <dialog
        ref={dialogRef}
        className="p-4 backdrop:bg-black/50 m-auto rounded-xl overflow-hidden"
      >
        <form action={editMovie} className="flex flex-col gap-5 p-5 w-130">
          <label>
            <p className="font-medium text-gray-700">Title</p>
            <input
              type="text"
              name="title"
              className="w-full rounded border-gray-300 border px-2"
              defaultValue={props.title}
            />
          </label>
          <label>
            <p className="font-medium text-gray-700">Description</p>
            <textarea
              name="desc"
              className="w-full rounded border-gray-300 border px-2"
              defaultValue={props.description}
            />
          </label>
          <label>
            <p className="font-medium text-gray-700">Image URL</p>
            <input
              type="text"
              name="img"
              className="w-full rounded border-gray-300 border px-2"
              defaultValue={props.imgUrl}
            />
          </label>
          <input type="text" name="id" value={props.id} hidden readOnly />
          <button
            onClick={() => dialogRef.current?.close()}
            className="rounded-md p-3 text-white font-medium bg-black w-fit"
          >
            Save
          </button>
        </form>
      </dialog>
    </>
  );
}
