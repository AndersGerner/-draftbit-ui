/**
 * This is an interface for a hybrid component.
 *
 * Its public implementation is `@draftbit/native`, and it is injected inside
 * `@draftbit/ui`.
 */
import React from "react";
export const injectIcon = (Component, Icon) => (props) => React.createElement(Component, { ...props, Icon });
