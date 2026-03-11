import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");

  const API = "http://127.0.0.1:8000/api/tasks/";

  // --- Logic for Progress Bar ---
  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const progress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const fetchTasks = () => {
    axios.get(API).then((res) => setTasks(res.data));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = () => {
    if (!title.trim()) return;
    axios.post(API, {
      title,
      priority,
      completed: false,
    }).then(() => {
      setTitle("");
      fetchTasks();
    });
  };

  const toggleTask = (task) => {
    axios.patch(`${API}${task.id}/`, {
      completed: !task.completed,
    }).then(fetchTasks);
  };

  const deleteTask = (id) => {
    axios.delete(`${API}${id}/`).then(fetchTasks);
  };

  const getPriorityColor = (p) => {
    if (p === 'high') return 'bg-red-100 text-red-700';
    if (p === 'medium') return 'bg-amber-100 text-amber-700';
    return 'bg-emerald-100 text-emerald-700';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-12 text-gray-900">
      <div className="mx-auto max-w-2xl">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-black tracking-tight text-indigo-600">Task Manager</h1>
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-bold text-indigo-600">
            {tasks.length} Tasks
          </span>
        </header>

        {/* Progress Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-gray-600">Task Completion</span>
            <span className="text-sm font-bold text-indigo-600">{progress}%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
            <div 
              className="h-full bg-indigo-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-gray-400">
            {completedCount} of {totalCount} tasks finished
          </p>
        </section>

        {/* Input Section */}
        <section className="mb-10 rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">Add New Task</h3>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
              placeholder="What needs to be done?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <select
              className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 outline-none focus:border-indigo-500 transition-all"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button 
              onClick={addTask}
              className="rounded-xl bg-indigo-600 px-6 py-2 font-bold text-white hover:bg-indigo-700 active:scale-95 transition-all shadow-md shadow-indigo-100"
            >
              Add
            </button>
          </div>
        </section>

        {/* List Section */}
        <div className="space-y-3">
          {tasks.map((task) => (
            <div 
              key={task.id} 
              className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm border border-transparent hover:border-indigo-100 transition-all"
            >
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => toggleTask(task)}
                  className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all ${
                    task.completed ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300 hover:border-indigo-500'
                  }`}
                >
                  {task.completed && <span className="text-xs text-white">✓</span>}
                </button>
                
                <div>
                  <p className={`font-medium transition-all ${task.completed ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                    {task.title}
                  </p>
                  <span className={`inline-block rounded-md px-2 py-0.5 text-[10px] font-bold uppercase ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </div>
              </div>

              <button 
                onClick={() => deleteTask(task.id)}
                className="group p-2 text-gray-300 hover:text-red-500 transition-colors"
                title="Delete Task"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;