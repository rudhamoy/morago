
export const SideNavMenu = ({items, resourceName, navComponent: NavComponent}) => {
    return (
        <>
            {items.map((item, i) => (
                <NavComponent key={i} {...{[resourceName]: item}} />
            ))}     
        </>
    )
}