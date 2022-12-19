import { act, cleanup, renderHook } from '@testing-library/react';
import { todosMock } from '../mocks/todos.mock';
import { TodoStatus } from './../../types/todo.type';
import { useTodos } from './useTodos';

const mockId = '167120666223';

describe('useTodos', () => {
  afterEach(() => {
    cleanup();
  });
  it('Should return mocked todos initially', () => {
    const { result } = renderHook(() => useTodos());

    expect(result.current.todos).toEqual(todosMock);
  });

  it('Should delete first todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.deleteTodo(todosMock[1].id);
    });

    expect(result.current.todos).toHaveLength(3);
  });

  it('Should add a todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('new todo');
    });

    expect(result.current.todos).toHaveLength(4);
    expect(result.current.todos[0].status).toEqual(TodoStatus.PENDING);
  });

  it('Should edit a todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.editTodo(todosMock[2].id, 'edited');
    });

    expect(result.current.todos[2].title).toBe('edited');
  });

  it('Should toggle a todo status', () => {
    const { result } = renderHook(() => useTodos());
    const todoByIdBefore = result.current.todos.find((todo) => todo.id === mockId);
    expect(todoByIdBefore!.status).toEqual(TodoStatus.COMPLETED);

    act(() => {
      result.current.toggleTodoStatus(mockId);
    });

    const todoByIdAfter = result.current.todos.find((todo) => todo.id === mockId);

    expect(todoByIdAfter!.status).toEqual(TodoStatus.PENDING);
  });
});
