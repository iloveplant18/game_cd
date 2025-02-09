import { DialogHTMLAttributes, ReactNode, useEffect } from "react";

type ModalProps = DialogHTMLAttributes<any> & {
  isModalShown: boolean;
  children: ReactNode;
};

function Modal({ isModalShown, id, children }: ModalProps) {
  useEffect(() => {
    if (isModalShown) openModal();
    else closeModal();
  }, [isModalShown]);

  function closeModal() {
    const modal = findModal();
    modal.close();
  }

  function openModal() {
    const modal = findModal();
    modal.showModal();
    console.log("asdf");
  }

  function findModal() {
    return document.querySelector(`#${id}`) as HTMLDialogElement;
  }

  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button className="select-none cursor-default">close</button>
      </form>
    </dialog>
  );
}

export default Modal;
