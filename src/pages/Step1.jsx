import WizardLayout from "../components/Layout/WizardLayout";
import StepSidebar from "../components/Sidebar/StepSidebar";
import PlanCard from "../components/Cards/PlanCard";
import PrimaryButton from "../components/Buttons/PrimaryButton";

function Step1({ nextStep }) {
  const plans = [
    {
      id: 1,
      title: "28506 - Plan Conect Star EMP 35GB FIN",
      description:
        "It is a long established fact that a reader will be distracted by the readable content.",
    },
    {
      id: 2,
      title: "28506 - Plan Conect Star EMP 35GB FIN",
      description:
        "It is a long established fact that a reader will be distracted by the readable content.",
    },
    {
      id: 3,
      title: "28506 - Plan Conect Star EMP 35GB FIN",
      description:
        "It is a long established fact that a reader will be distracted by the readable content.",
    },
  ];

  return (
    <WizardLayout
      sidebar={
        <StepSidebar
          step={1}
          title="Plan Asignado"
          description="Contrary to popular belief, Lorem Ipsum is not simply random text."
        />
      }
    >
      {plans.map((plan) => (
        <PlanCard
          key={plan.id}
          title={plan.title}
          description={plan.description}
        />
      ))}

      <PrimaryButton onClick={nextStep}>Siguiente</PrimaryButton>
    </WizardLayout>
  );
}

export default Step1;
