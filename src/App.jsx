import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import User from "./User";

function App() {
  const [drag, setDrag] = useState([
    {
      nombre: "Juan",
      edad: 20,
      ciudad: "Posadas",
      id: 1,
    },
    {
      nombre: "Juan1",
      edad: 20,
      ciudad: "Posadas",
      id: 2,
    },
    {
      nombre: "Juan2",
      edad: 20,
      ciudad: "Posadas",
      id: 3,
    },
  ]);

  const handleDrag = (event) => {
    const { active, over } = event;

    const oldIndex = drag.findIndex((e) => e.id === active.id);
    const newIndex = drag.findIndex((e) => e.id === over.id);

    const newOrder = arrayMove(drag, oldIndex, newIndex);
    /*    console.log(drag);
    console.log(newOrder); */
    setDrag(newOrder);
  };

  return (
    <div className="flex justify-center items-center m-2">
      <div className="w-2/3 m-2">
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDrag}>
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold">Drag 'n Drop</h1>
          </div>
          <SortableContext items={drag} strategy={verticalListSortingStrategy}>
            {" "}
            {drag.map((user) => (
              <User key={crypto.randomUUID()} user={user} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}

export default App;
