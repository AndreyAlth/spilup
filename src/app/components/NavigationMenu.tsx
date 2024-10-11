import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ReactNode } from "react";

export const NavigationMenuRoot = ({ children }: { children: ReactNode }) => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      {/* <NavigationMenu.List className="NavigationMenuList"> */}
        {children}
        {/* <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator> */}
      {/* </NavigationMenu.List> */}
      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

export const NavigationMenuItem = ({ children }: { children: ReactNode }) => {
  return <NavigationMenu.Item>{children}</NavigationMenu.Item>;
};

export const NavigationMenuTrigger = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <NavigationMenu.Trigger className="NavigationMenuTrigger">
      {children}
    </NavigationMenu.Trigger>
  );
};

export const NavigationMenuContent = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <NavigationMenu.Content className="NavigationMenuContent">
      {children}
    </NavigationMenu.Content>
  );
};

export const NavigationMenuLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <NavigationMenu.Link className="NavigationMenuLink" href={href}>
      {children}
    </NavigationMenu.Link>
  );
};

export const NavigationMenuList = ({ children }: { children: ReactNode }) => {
  return (
    <NavigationMenu.List className="NavigationMenuList">
      {children}
    </NavigationMenu.List>
  );
};
