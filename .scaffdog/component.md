---
name: 'component'
root: '.'
output: 'src/'
ignore: ['.']
questions:
  name: 'Please enter a component name.'
  story:
    confirm: 'Do you need a story?'
    initial: true
---

# Variables

- component_name: {{ inputs.name | pascal }}
- props_name: {{ component_name + 'Props' }}


# `components/{{ component_name }}/index.ts`

```typescript
export * from './{{ component_name }}';

```

# `components/{{ component_name }}/{{ component_name }}.tsx`

```typescript
import React from 'react';

type {{ props_name }} = {};

/**
 * Describe the component.
 */
export const {{ component_name }}: React.FC<{{ props_name }}> = ({}) => {
  return <div></div>;
};

```

# `{{ !inputs.story && '!' }}components/{{ component_name }}/{{ component_name }}.stories.tsx`

```typescript
import type {
  Meta, StoryObj,
} from '@storybook/react';
import { {{ component_name }} } from './{{ component_name }}';

const meta: Meta = {
  title: '{{ 'Components' + '/' + component_name }}',
  component: {{ component_name }},
}

export default meta

/**
 * Describe the story.
 */
export const Default: StoryObj<typeof {{ component_name }}> = {
  args: {},
}

```
