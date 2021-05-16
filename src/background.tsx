console.log("Starting background process");

overwolf.windows.obtainDeclaredWindow("desktop", (result) => {
  overwolf.windows.restore(result.window.id, console.log);
});

export {};
