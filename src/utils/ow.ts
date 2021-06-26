type WindowName = "background" | "desktop";

export function obtainDeclaredWindow(
  windowName: WindowName
): Promise<overwolf.windows.WindowInfo> {
  return new Promise((resolve, reject) => {
    overwolf.windows.obtainDeclaredWindow(windowName, (result) => {
      if (result.success) {
        resolve(result.window);
      } else {
        reject(result.error);
      }
    });
  });
}

export function restoreWindow(
  windowId: string
): Promise<overwolf.windows.WindowIdResult> {
  return new Promise((resolve, reject) => {
    overwolf.windows.restore(windowId, (result) => {
      if (result.success) {
        resolve(result);
      } else {
        reject(result.error);
      }
    });
  });
}

export async function openWindow(windowName: WindowName): Promise<boolean> {
  const window = await obtainDeclaredWindow(windowName);
  const windowId = await restoreWindow(window.id);
  return windowId.success;
}
