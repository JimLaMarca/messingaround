import {FC, ReactElement} from "react";

type RenderIfProps = {
    condition: boolean
    children?: ReactElement
}

export const RenderIf: FC<RenderIfProps> = (props: RenderIfProps): ReactElement | null => {
    const { condition = false, children } = props;
    const showElement = condition && !!children;

    if (showElement) {
        return <>{children}</>;
    }
    return null;
}