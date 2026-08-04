import { createContext, Dispatch } from 'react';

import { ActionData } from "common/actions/types";

export const DispatchContext = createContext<Dispatch<ActionData>>(() => {});
