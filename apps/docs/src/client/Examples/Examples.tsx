import { useStoriesLoad } from '../../shared/hooks/useStoriesLoad';
import { sortStories } from '../../shared/utils/sortStories.ts';

import { DEFAULT } from '../../shared/globals.ts';

import type { ComponentStruct, Story } from '../../shared/types.ts';

import styles from './Examples.module.css';

interface ExamplesProps {
  componentName: string;
  componentDir?: string;
}

const Examples = (props: ExamplesProps) => {
  const { componentName, componentDir = componentName } = props;

  const [stories, isLoading] = useStoriesLoad(componentName, componentDir);

  if (isLoading) {
    return <div>loading...</div>;
  }

  const ComponentStruct: ComponentStruct = stories.default;
  const { component: AnyComponent } = ComponentStruct;
  const Component = AnyComponent as JSX.ElementType;

  const sortedStoriesList = sortStories(stories);

  const examples = sortedStoriesList.map(
    ([name, data]: [string, Story | undefined]) => {
      if (!data) return;
      if (name === DEFAULT) return;
      if (data?.parameters?.hidden) return;

      let Variant;

      if (data.render) {
        if (data.args) {
          const Template = data.render as JSX.ElementType;

          Variant = () => <Template {...data.args} />;
        } else {
          Variant = data.render;
        }
      } else if (Component) {
        Variant = () => <Component {...data.args} />;
      }

      if (!Variant) return;

      return (
        <li className={styles.item} key={name}>
          <div>
            <div>
              <h2 className={styles.heading}>{name}</h2>
            </div>
            <div className={styles.example}>
              <div className={styles.content}>
                <Variant />
              </div>
            </div>
          </div>
        </li>
      );
    }
  );

  return <ul className={styles.root}>{examples}</ul>;
};

export default Examples;
