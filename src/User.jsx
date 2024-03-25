import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function User({ user }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: user.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-7/12">
        <div
          className="bg-slate-500 rounded-md m-2 p-2 text-white"
          style={style}
          ref={setNodeRef}
          {...attributes}
          {...listeners}
        >
          <h1>{user.nombre}</h1>
          <h2>{user.edad}</h2>
        </div>
      </div>
    </div>
  );
}

export default User;
